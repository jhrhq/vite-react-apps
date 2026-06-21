import { useCreateQuizMutation } from "@quizzes/api/adminQuizzes";
import Button from "@quizzes/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@quizzes/components/ui/form";
import Input from "@quizzes/components/ui/input";
import Textarea from "@quizzes/components/ui/textarea";
import Spinner from "@quizzes/svg/Spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const CreateQuizSchema = z.object({
  title: z
    .string()
    .min(4, {
      message: "Title must be at least 4 characters.",
    })
    .max(255, {
      message: "Title must not be longer than 255 characters.",
    })
    .trim(),

  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(255, {
      message: "Description must not be longer than 255 characters.",
    })
    .trim(),
});

const defaultValues = {
  title: "",
  description: "",
};

const CreateQuizForm = () => {
  const [createQuiz, { isLoading }] = useCreateQuizMutation();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(CreateQuizSchema),
    defaultValues,
  });

  async function handleCreateQuiz(data) {
    try {
      const response = await createQuiz(data).unwrap();
      navigate(`/quiz-set-entry-page/${response?.data.id}`);
      toast.success("Quiz created successfully.");
    } catch (err) {
      form.setError("root.random", {
        type: "random",
        message: err.response.data.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreateQuiz)}>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="mb-4 space-y-0">
                <FormLabel className="block text-sm font-medium text-gray-700 mb-1">
                  Quiz title
                </FormLabel>
                <FormControl>
                  <Input placeholder="Quiz" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-6">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="mb-4 space-y-0">
                <FormLabel className="block text-sm font-medium text-gray-700 mb-1">
                  Description (Optional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="w-full"
                    placeholder="description"
                    rows="4"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {!form.formState.errors?.root?.random.message && (
          <FormMessage className="-mt-4 mb-4">
            {form.formState.errors?.root?.random.message}
          </FormMessage>
        )}
        <Button
          disabled={isLoading}
          type="submit"
          className="relative w-full block text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-75"
        >
          {isLoading ? <Spinner /> : "Next"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateQuizForm;

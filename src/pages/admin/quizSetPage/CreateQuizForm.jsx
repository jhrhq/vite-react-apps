import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  const form = useForm({
    resolver: zodResolver(CreateQuizSchema),
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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

        <button
          //   href="./quiz_set_entry_page.html"
          type="submit"
          className="w-full block text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Next
        </button>
      </form>
    </Form>
  );
};

export default CreateQuizForm;

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const checkExactlyOneTrue = (arr) => {
  const trueCount = arr.filter((item) => item.isChecked === true).length;
  return trueCount === 1;
};

const QuestionSchema = z
  .object({
    question: z
      .string()
      .min(4, {
        message: "Question title must be at least 4 characters.",
      })
      .max(100, {
        message: "Question title must not be longer than 100 characters.",
      }),
    options: z.array(
      z.object({
        option: z
          .string()
          .min(4, {
            message: "Option  must be at least 4 characters.",
          })
          .max(100, {
            message: "Option  must not be longer than 100 characters.",
          }),
        isChecked: z.boolean(),
      })
    ),
  })
  .superRefine((val, ctx) => {
    if (!checkExactlyOneTrue(val.options)) {
      ctx.addIssue({
        message: "Select only one option for answer",
        code: z.ZodIssueCode.custom,
        path: [`options.${val.options.length - 1}.option`],
      });
    }
  });

const defaultValues = {
  question: "",
  options: [
    { option: "", isChecked: false },
    { option: "", isChecked: false },
    { option: "", isChecked: false },
    { option: "", isChecked: false },
  ],
};

const CreateQuestion = () => {
  const form = useForm({
    resolver: zodResolver(QuestionSchema),
    defaultValues,
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: "options", // name of the field array
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-foreground">Create Quiz</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem className="mb-4 space-y-0">
                <FormLabel className="block text-sm font-medium text-foreground mb-1">
                  Question Title
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter quiz title"
                    type="text"
                    className="w-full mt-2 p-2 border border-input rounded-md bg-background text-foreground"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-sm text-gray-600 mt-4">Add Options</p>

          <div id="optionsContainer" className="space-y-2 my-4">
            {/* quiz option */}

            {fields.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center space-x-2 px-4 py-1 rounded-md group focus-within:ring focus-within:ring-primary/80 bg-white"
                >
                  <FormField
                    control={form.control}
                    name={`options.${index}.isChecked`}
                    render={({ field }) => (
                      <FormItem className=" flex gap-2 items-center space-y-0">
                        <FormControl>
                          <input
                            id={`options[${index}].isChecked`}
                            type="checkbox"
                            className="text-primary focus:ring-0 w-4 h-4"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`options.${index}.option`}
                    render={({ field }) => (
                      <FormItem className=" space-y-0">
                        <FormLabel className="sr-only">
                          Option {index + 1}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Option 1"
                            type="text"
                            className="w-full p-2 bg-transparent rounded-md text-foreground outline-none border-input focus:ring-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              );
            })}
          </div>
          <button className="w-full bg-primary text-white text-primary-foreground p-2 rounded-md hover:bg-primary/90 transition-colors">
            Save Quiz
          </button>
        </form>
      </Form>
    </div>
  );
};

export default CreateQuestion;

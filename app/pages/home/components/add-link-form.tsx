import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { addLinkSchema } from "@/schema/addLink";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { linkTypes } from "@/app/types/link";
import {
  FaLink,
  FaTags,
  FaGlobe,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";
import z from "zod";
import { useAddLink, useCreateTag } from "@/app/services/mutations";

interface AddLinkFormProps {
  availableTags: Array<{ tagId: string; name: string }>;
}

const AddLinkForm = ({ availableTags }: AddLinkFormProps) => {
  const [selectedTags, setSelectedTags] = useState<
    Array<{ tagId: string; name: string }>
  >([]);
  const [tagInput, setTagInput] = useState("");

  const form = useForm<z.infer<typeof addLinkSchema>>({
    resolver: zodResolver(addLinkSchema),
    defaultValues: {
      title: "",
      description: "",
      url: "",
      type: "WebUrl",
      tags: [],
    },
  });

  const addTag = (tag: { tagId: string; name: string }) => {
    if (
      tag &&
      !selectedTags.find((t) => t.tagId === tag.tagId) &&
      selectedTags.length < 5
    ) {
      const newTags = [...selectedTags, tag];
      setSelectedTags(newTags);
      form.setValue(
        "tags",
        newTags.map((t) => t.tagId)
      ); // Store tag IDs in form
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: { tagId: string; name: string }) => {
    const newTags = selectedTags.filter(
      (tag) => tag.tagId !== tagToRemove.tagId
    );
    setSelectedTags(newTags);
    form.setValue(
      "tags",
      newTags.map((t) => t.tagId)
    ); // Update form with tag IDs
  };

  const addTagsMutation = useCreateTag();

  const handleTagInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      // Find tag by name from available tags
      const foundTag = availableTags.find(
        (tag) => tag.name.toLowerCase() === tagInput.trim().toLowerCase()
      );
      if (foundTag) {
        addTag(foundTag);
      } else {
        // // Show error for non-existent tag
        // toast.error(
        //   `Tag "${tagInput.trim()}" not found. Please select from available tags.`
        // );

        // We Wull Create The tag
        const dataTag = {
          name: tagInput.trim(),
        };
        addTagsMutation.mutate(dataTag);
        toast.success(
          `Tag "${tagInput.trim()}" Created. Please select from available tags.`
        );
        setTagInput("");
      }
    }
  };

  const addBookmarMutataion = useAddLink();

  function onSubmitFun(values: z.infer<typeof addLinkSchema>) {
    try {
      console.log(values);
      addBookmarMutataion.mutate(values);
      toast.success("Link added successfully!");
      form.reset();
      setSelectedTags([]);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Add New Bookmark
          </CardTitle>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Save your favorite links with tags and descriptions
          </p>
        </CardHeader>

        <CardContent className="px-4 md:px-8 pb-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmitFun)}
              className="space-y-4 md:space-y-6"
            >
              {/* Title Field */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base font-semibold text-gray-700 flex items-center gap-2">
                      <FaLink className="w-4 h-4 text-emerald-500" />
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter a descriptive title for your bookmark"
                        className="h-10 md:h-12 text-sm md:text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 rounded-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base font-semibold text-gray-700">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Brief description of what this bookmark contains"
                        className="h-10 md:h-12 text-sm md:text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 rounded-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* URL Field */}
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base font-semibold text-gray-700">
                      Bookmark URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://example.com"
                        className="h-10 md:h-12 text-sm md:text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 rounded-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Type Field */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base font-semibold text-gray-700">
                      Bookmark Type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || "WebUrl"}
                    >
                      <FormControl>
                        <SelectTrigger className="h-10 md:h-12 text-sm md:text-base border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 rounded-lg">
                          <SelectValue placeholder="Select the type of bookmark" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          value="Twitter"
                          className="flex items-center gap-2"
                        >
                          <FaTwitter className="w-4 h-4 text-blue-400" />
                          Twitter
                        </SelectItem>
                        <SelectItem
                          value="Instagram"
                          className="flex items-center gap-2"
                        >
                          <FaInstagram className="w-4 h-4 text-pink-500" />
                          Instagram
                        </SelectItem>
                        <SelectItem
                          value="WebUrl"
                          className="flex items-center gap-2"
                        >
                          <FaGlobe className="w-4 h-4 text-green-500" />
                          Web URL
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tags Field */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base font-semibold text-gray-700 flex items-center gap-2">
                      <FaTags className="w-4 h-4 text-emerald-500" />
                      Tags
                    </FormLabel>
                    <FormControl>
                      <div className="space-y-3">
                        {/* Tag Input */}
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Input
                            placeholder="Type a tag and press Enter"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            onKeyPress={handleTagInputKeyPress}
                            className="flex-1 h-10 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 rounded-lg text-sm"
                          />
                          <Button
                            type="button"
                            onClick={() => {
                              const foundTag = availableTags.find(
                                (tag) =>
                                  tag.name.toLowerCase() ===
                                  tagInput.trim().toLowerCase()
                              );
                              if (foundTag) {
                                addTag(foundTag);
                              } else {
                                // Show error for non-existent tag
                                // We Wull Create The tag
                                const dataTag = {
                                  name: tagInput.trim(),
                                };
                                addTagsMutation.mutateAsync(dataTag);
                                toast.success(
                                  `Tag "${tagInput.trim()}" Created. Please select from available tags.`
                                );
                                setTagInput("");
                              }
                            }}
                            disabled={
                              !tagInput.trim() || selectedTags.length >= 5
                            }
                            className="h-10 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-200 text-sm"
                          >
                            Add
                          </Button>
                        </div>

                        {/* Selected Tags */}
                        {selectedTags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {selectedTags.map((tag) => (
                              <Badge
                                key={tag.tagId}
                                variant="secondary"
                                className="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200 transition-colors duration-200 cursor-pointer"
                                onClick={() => removeTag(tag)}
                              >
                                #{tag.name}
                                <span className="ml-1 text-emerald-600 hover:text-emerald-800">
                                  ×
                                </span>
                              </Badge>
                            ))}
                          </div>
                        )}

                        {/* Available Tags from API */}
                        {availableTags.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-xs md:text-sm text-gray-600">
                              Available tags:
                            </p>
                            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                              {availableTags
                                .filter(
                                  (tag) =>
                                    !selectedTags.find(
                                      (t) => t.tagId === tag.tagId
                                    )
                                )
                                .slice(0, 20)
                                .map((tag) => (
                                  <Badge
                                    key={tag.tagId}
                                    variant="outline"
                                    className="px-2 py-1 text-xs border-gray-300 text-gray-600 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-200 cursor-pointer"
                                    onClick={() => addTag(tag)}
                                  >
                                    + {tag.name}
                                  </Badge>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormDescription className="text-xs md:text-sm text-gray-500">
                      Add up to 5 tags to organize your bookmarks. Click on
                      available tags to add them quickly.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="pt-4 md:pt-6">
                <Button
                  type="submit"
                  className="w-full h-10 md:h-12 text-base md:text-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Add Bookmark
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddLinkForm;

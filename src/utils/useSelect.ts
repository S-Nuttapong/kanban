import { useState, useEffect } from "react";
import { UseFormProps, Option } from "../interface/IAddNewItem";

export const useSelect = ({ register, setValue }: UseFormProps) => {
  const defaultTags:Option[] = [] 
  const [selectedTags, setSelectedTags] = useState<Option[]>(defaultTags);
  const handleChangeTags = (options: any) => {
    setSelectedTags(options);
    setValue("Tags", options);
  };

  const handleChangePriority = (options: any) => {
    setValue("Priority", options);
  };

  useEffect(() => {
    register({ name: "Tags" });
    register({ name: "Priority" });
  }, [register]);

  return {
    handleChangeTags,
    handleChangePriority,
    selectedTags,
    defaultTags
  };
};

import { Input, InputGroup } from "@chakra-ui/react"
import {  SubmitEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = (e:SubmitEvent<HTMLFormElement> ) => {
    e.preventDefault();
    if (ref.current) onSearch(ref.current.value);
  };
  
  return (
    <form onSubmit={onSubmit}>
      <InputGroup startElement={<BsSearch />} >
        <Input
          id="search-game"
          ref={ref}
          borderRadius={20}
          placeholder="Search Games"
          width="full"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

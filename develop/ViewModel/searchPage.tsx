import * as React from "react";
import {} from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import companyNameCode from "../Model/companyNameCode";

//검색결과
interface SearchResult {
  no : number;
  name : string;
  code : string;
}

//검색 로직 작성 중
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string|number>("");
  const [searchCategory, setSearchCategory] = useState<string>("name");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSearchCategory(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const companyDateToString = (value: SearchResult) : string  => {
    const companyName = React.createElement('div')
    const companyCode = React.createElement('div')
    
    return ``
  }

  const companySearchList : [] = []
  companyNameCode(searchCategory,searchTerm).then(value => {
    companySearchList.push()
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={handleCategoryChange} value={searchCategory}>
          <option value="name">회사명</option>
          <option value="code">회사코드</option>
        </select>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <input type="submit" value="확인" />
      </form>
      <ul>
        "<li>리스트</li>"
      </ul>
    </div>
  );
};

export default SearchPage;

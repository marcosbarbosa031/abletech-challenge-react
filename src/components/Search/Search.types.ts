export interface ISearchProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

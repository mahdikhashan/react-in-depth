/* eslint-disable @typescript-eslint/no-unused-vars */

type SearchBarProps = unknown;

function SearchBar(props: SearchBarProps) {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

export { SearchBar };

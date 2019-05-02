import React from 'react';

function Header({ titulo }: { titulo: string }): JSX.Element {
  return (
    <header className="top">
      <h1>{titulo}</h1>
    </header>
  );
}
export default Header;

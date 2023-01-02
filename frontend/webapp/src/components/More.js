import Button from "react-bootstrap/Button";

const More = ({ pagination, handleNextPage }) => {
  let thereAreMore = false;
  if (pagination) {
    const { offset, count, total } = pagination;
    thereAreMore = offset + count < total;
  }

  return (
    <Button
      variant="outline-primary"
      disabled={!thereAreMore}
      onClick={handleNextPage}
    >
      More &raquo;
    </Button>
  );
};

export default More;

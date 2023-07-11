type Props = {
  params: {
    id: string;
  };
};

export default function Blog({ params: { id } }: Props) {
  return <h1>Post page {id}</h1>;
}

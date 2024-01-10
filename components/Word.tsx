type WordProps = {
  input: string;
};

export default function Word({ input }: WordProps) {
  return input.split("").map((el, index) => (
    <span className="text-xl uppercase text-white md:text-4xl" key={index}>
      {el}
    </span>
  ));
}

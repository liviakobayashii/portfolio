export default function Li({ text }: { text: string }) {
  return (
    <li className="text-neutral-200 hover:cursor-pointer hover:text-fuchsia-600 duration-200">
      {text}
    </li>
  );
}

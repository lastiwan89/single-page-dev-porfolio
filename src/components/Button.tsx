export default function Button({ text = "contact me" }: { text?: string }) {
  return (
    <button className="text-pure-white hover:text-green tracking-ls2.286 border-green border-b-4 pb-2 text-center font-bold uppercase">
      {text}
    </button>
  );
}

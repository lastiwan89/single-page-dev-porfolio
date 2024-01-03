export default function Button({ text = "contact me" }: { text?: string }) {
  return (
    <button className="text-white-lighter tracking-ls2.286 border-b-4 border-green pb-2 text-center font-bold uppercase hover:text-green">
      {text}
    </button>
  );
}

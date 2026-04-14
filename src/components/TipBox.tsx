type Props = {
  text: string;
};

export function TipBox({ text }: Props): JSX.Element {
  return (
    <aside className="tip-box">
      <h5>小提醒</h5>
      <p>{text}</p>
    </aside>
  );
}

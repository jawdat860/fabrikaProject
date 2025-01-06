function TextComponent({
  title,
  description,
  classNameTextTitle,
  classNameTitle,
  classNamedescription,
}) {
  return (
    <div className={classNameTextTitle}>
      <div className={classNameTitle}>{title}</div>
      <div className={classNamedescription} dangerouslySetInnerHTML={{__html: description}} ></div>
    </div>
  );
}
export default TextComponent;

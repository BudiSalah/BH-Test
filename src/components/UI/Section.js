function Section({ children, className }) {
  return (
    <section className={`${className} rounded-lg p-4 shadow-sm`}>
      {children}
    </section>
  );
}

export default Section;

export default function Home() {
  return (
    <>
      <div style={{ height: "1rem", marginBottom: "1rem", marginTop: "1rem" }}>
        Title
      </div>
      <h1>Hello World!</h1>
      <h2>Hello World!</h2>
      <h3>Hello World!</h3>
      <h4>Hello World!</h4>
      <h5>Hello World!</h5>
      <h6>Hello World!</h6>

      <div style={{ height: "1rem", marginBottom: "1rem", marginTop: "1rem" }}>
        Font Size
      </div>

      <p style={{ fontSize: "var(--font-size-00)" }}>Hello World!</p>
      <p style={{ fontSize: "var(--font-size-01)" }}>Hello World!</p>
      <p style={{ fontSize: "var(--font-size-0)" }}>Hello World!</p>
      <p style={{ fontSize: "var(--font-size-1)" }}>Hello World!</p>
      <p style={{ fontSize: "var(--font-size-2)" }}>Hello World!</p>
      <p style={{ fontSize: "var(--font-size-3)" }}>Hello World!</p>
      <p style={{ fontSize: "var(--font-size-4)" }}>Hello World!</p>
      <p style={{ fontSize: "var(--font-size-5)" }}>Hello World!</p>

      <div style={{ height: "1rem", marginBottom: "1rem", marginTop: "1rem" }}>
        Primary Green
      </div>

      <p style={{ color: "var(--green-2)" }}>Hello World!</p>
      <p style={{ color: "var(--green-4)" }}>Hello World!</p>
      <p style={{ color: "var(--green-6)" }}>Hello World!</p>
      <p style={{ color: "var(--green-8)" }}>Hello World!</p>
      <p style={{ color: "var(--green-10)" }}>Hello World!</p>

      <div style={{ height: "1rem", marginBottom: "1rem", marginTop: "1rem" }}>
        Background Colors
      </div>

      <div
        style={{ backgroundColor: "var(--surface-1)", height: "1rem" }}
      ></div>

      <div
        style={{ backgroundColor: "var(--surface-2)", height: "1rem" }}
      ></div>

      <div
        style={{ backgroundColor: "var(--surface-3)", height: "1rem" }}
      ></div>

      <div style={{ height: "1rem", marginBottom: "1rem", marginTop: "1rem" }}>
        Text Color
      </div>

      <p style={{ color: "var(--text-1)" }}>Hello World!</p>
      <p style={{ color: "var(--text-2)" }}>Hello World!</p>
      <p style={{ color: "var(--text-3)" }}>Hello World!</p>
      <p style={{ color: "var(--text-4)" }}>Hello World!</p>
      <p style={{ color: "var(--text-5)" }}>Hello World!</p>
    </>
  );
}

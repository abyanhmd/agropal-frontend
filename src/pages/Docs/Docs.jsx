import docs from "../../data/ApiDocumentation.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import { useState } from "react";

function Docs() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const methodColor = (method) => {
    switch (method) {
      case "GET":
        return "bg-[#28a745]";
      case "POST":
        return "bg-[#ffc107]";
      case "DELETE":
        return "bg-[#dc3545]";
      case "PUT":
        return "bg-[#007bff]";
      default:
        return "bg-primary";
    }
  };

  const customSyntaxHighlighterStyle = {
    style: {
      fontSize: "14px",
      fontFamily: "Jetbrains Mono, monospace",
    },
  };

  return (
    <section className="w-2/5 py-4 mx-auto">
      <div className="text-center font-albert text-primary">
        <p className="mb-2 text-3xl font-bold">AgroPal</p>
        <p className="text-xl font-semibold">API Documentation</p>
      </div>

      <div className="my-8">
        {docs.map((item, index) => (
          <div
            key={index}
            className="p-2 my-4 overflow-hidden duration-300 transform border-2 rounded-lg border-border hover:scale-105"
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center font-albert">
                <p
                  className={`w-20 py-1 font-bold text-center rounded-md text-[#fff] ${methodColor(
                    item.method,
                  )}`}
                >
                  {item.method}
                </p>
                <p className="text-lg font-medium text-primary ms-4">
                  {item.endpoint}
                </p>
                <p className="mt-0.5 text-md text-secondary ms-4">
                  {item.description}
                </p>
              </div>

              <div className="mx-3 my-auto">
                {openAccordion === index ? (
                  <HiOutlineChevronDown className="w-5 h-5 text-primary" />
                ) : (
                  <HiOutlineChevronRight className="w-5 h-5 text-primary" />
                )}
              </div>
            </div>

            {openAccordion === index && (
              <div className="px-3 mt-4">
                <div>
                  <p className="mt-4 text-lg font-semibold text-primary">
                    Authorization
                  </p>
                  {item.authorization === null ? (
                    <p className="my-2 text-md font-md ms-2 text-primary">
                      Empty
                    </p>
                  ) : (
                    <SyntaxHighlighter
                      language="http"
                      style={atomDark}
                      codeTagProps={customSyntaxHighlighterStyle}
                    >
                      {item.authorization}
                    </SyntaxHighlighter>
                  )}
                </div>
                <div>
                  <p className="mt-4 text-lg font-semibold text-primary">
                    Request
                  </p>
                  {item.request === null ? (
                    <p className="my-2 text-md font-md ms-2 text-primary">
                      Empty
                    </p>
                  ) : (
                    <SyntaxHighlighter
                      language="json"
                      style={atomDark}
                      codeTagProps={customSyntaxHighlighterStyle}
                    >
                      {JSON.stringify(item.request, null, 2)}
                    </SyntaxHighlighter>
                  )}
                </div>
                <div>
                  <p className="mt-4 text-lg font-semibold text-primary">
                    Response
                  </p>
                  <SyntaxHighlighter
                    language="json"
                    style={atomDark}
                    codeTagProps={customSyntaxHighlighterStyle}
                  >
                    {JSON.stringify(item.response, null, 2)}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Docs;

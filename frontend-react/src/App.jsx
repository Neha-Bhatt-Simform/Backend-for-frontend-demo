import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [response, setResponse] = useState(null);
  const [selectedBff, setSelectedBff] =
    useState("without");
  const [loading, setLoading] =
    useState(false);

  const loadWithoutBff = async () => {
    try {
      setLoading(true);

      const [user, products, orders] =
        await Promise.all([
          axios.get(
            "http://localhost:5001/users/1"
          ),
          axios.get(
            "http://localhost:5002/products"
          ),
          axios.get(
            "http://localhost:5003/orders/1"
          ),
        ]);

      setSelectedBff("without");

      setResponse({
        user: user.data,
        products: products.data,
        orders: orders.data,
        frontendCalls: 3,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadWebBff = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:5000/api/web/dashboard"
      );

      setSelectedBff("web");
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMobileBff = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:5000/api/mobile/dashboard"
      );

      setSelectedBff("mobile");
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  if (!response) {
    return (
      <div className="loading">
        <div>
          <h1>🚀 BFF Demo</h1>

          <p>
            Choose which Backend For
            Frontend you want to test
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={loadWithoutBff}
            >
              ❌ Without BFF
            </button>

            <button
              onClick={loadWebBff}
            >
              🌐 Load Web BFF
            </button>

            <button
              onClick={loadMobileBff}
            >
              📱 Load Mobile BFF
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>
        🚀 Backend For Frontend (BFF)
        Demo
      </h1>

      <p className="subtitle">
        Compare Without BFF, Web BFF
        and Mobile BFF
      </p>

      <div className="bff-buttons">
        <button
          onClick={loadWithoutBff}
        >
          ❌ Without BFF
        </button>

        <button
          onClick={loadWebBff}
        >
          🌐 Web BFF
        </button>

        <button
          onClick={loadMobileBff}
        >
          📱 Mobile BFF
        </button>
      </div>

      <div className="architecture">
        <div className="api-call-card">
          <span>
            📡 API Request
          </span>

          <code>
            {selectedBff ===
              "without"
              ? "3 Direct Service Calls"
              : selectedBff ===
                "web"
                ? "GET /api/web/dashboard"
                : "GET /api/mobile/dashboard"}
          </code>
        </div>

        <div className="box frontend">
          {selectedBff ===
            "mobile"
            ? "📱 Mobile App"
            : "🌐 React App"}
        </div>

        {selectedBff ===
          "without" ? (
          <>
            <div className="service-arrows">
              <div>↙️</div>
              <div>⬇️</div>
              <div>↘️</div>
            </div>

            <div className="services">
              <div className="box service">
                👤 User Service
              </div>

              <div className="box service">
                📦 Product Service
              </div>

              <div className="box service">
                🛒 Order Service
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="arrow">
              ⬇️
            </div>

            <div className="box bff">
              {selectedBff ===
                "web"
                ? "🌐 Web BFF"
                : "📱 Mobile BFF"}
            </div>

            <div className="service-arrows">
              {selectedBff ===
                "web" ? (
                <>
                  <div>↙️</div>
                  <div>⬇️</div>
                  <div>↘️</div>
                </>
              ) : (
                <>
                  <div>↙️</div>
                  <div>↘️</div>
                </>
              )}
            </div>

            <div className="services">
              <div className="box service">
                👤 User Service
              </div>

              {selectedBff ===
                "web" && (
                  <div className="box service">
                    📦 Product Service
                  </div>
                )}

              <div className="box service">
                🛒 Order Service
              </div>
            </div>
          </>
        )}
      </div>

      <div className="info-banner">
        {selectedBff ===
          "without" && (
            <>
              ❌ Frontend directly
              calls User, Product and
              Order Services (3 API
              Calls)
            </>
          )}

        {selectedBff === "web" && (
          <>
            ✅ Frontend makes ONE
            call to Web BFF which
            aggregates User +
            Products + Orders
          </>
        )}

        {selectedBff ===
          "mobile" && (
            <>
              ✅ Frontend makes ONE
              call to Mobile BFF
              which returns optimized
              mobile data
            </>
          )}
      </div>

      <div className="grid">
        <div className="card">
          <h2>📊 Comparison</h2>

          <p>
            Frontend API Calls:
            <strong>
              {selectedBff ===
                "without"
                ? " 3"
                : " 1"}
            </strong>
          </p>

          <p>
            Aggregation Layer:
            <strong>
              {selectedBff ===
                "without"
                ? " Frontend"
                : " BFF"}
            </strong>
          </p>
        </div>

        <div className="card">
          {selectedBff === "without" ? (
            <div className="grid">
              <div className="card">
                <h2>👤 User API</h2>

                <pre>
                  {JSON.stringify(
                    response?.user,
                    null,
                    2
                  )}
                </pre>
              </div>

              <div className="card">
                <h2>📦 Product API</h2>

                <pre>
                  {JSON.stringify(
                    response?.products,
                    null,
                    2
                  )}
                </pre>
              </div>

              <div className="card">
                <h2>🛒 Order API</h2>

                <pre>
                  {JSON.stringify(
                    response?.orders,
                    null,
                    2
                  )}
                </pre>
              </div>
            </div>
          ) : (
            <div className="card">
              <h2>
                {selectedBff === "web"
                  ? "🌐 Web BFF Response"
                  : "📱 Mobile BFF Response"}
              </h2>

              <pre>
                {JSON.stringify(
                  response,
                  null,
                  2
                )}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
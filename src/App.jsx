import { useEffect, useState } from 'react';
import './App.css';

const SkipsPage = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
        );
        if (!response.ok) throw new Error('Failed to fetch skips');
        const data = await response.json();
        console.log(data);
        setSkips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSelect = (skipId) => {
    console.log('Selected skip:', skipId);
    // Add your selection logic here
  };

  if (loading) return <div className="loading">Loading available skips...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="skips-container">
      <h1 className="page-title ">Available Skips in Lowestoft (NR32)</h1>

      <div className="skips-grid">
        {skips.map((skip) => (
          <>
            <div key={skip._id} className="skip-card">
              <div className='flex'>
                <div className="card-image">
                  <img
                    src={`https://picsum.photos/seed/${skip._id}/400/300`}
                    alt={`Skip ${skip.size}`}
                  />
                </div>

                <div className="card-content">
                  <h3 className="card-title">{skip.size} yard skip</h3>
                  <p className="card-price  ">£ {skip.price_before_vat + skip.vat}</p>
                  <div className="card-details">
                    <p><span className='days color'>{skip.hire_period_days}</span> day hire period</p>
                    {skip.forbidden === false && (
                      <p className="forbidden-warning">
                        ⚠️ not allowed on the road
                      </p>
                    )}
                  </div>
                  <button
                    className="select-button"
                    onClick={() => handleSelect(skip._id)}
                  >
                    Select
                  </button>
                </div>

              </div>

            </div>

          </>
        ))}
      </div>
    </div>
  );
};

export default SkipsPage;

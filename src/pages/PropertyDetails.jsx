import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useProperties } from "../contexts/PropertiesContext";
import RelatedProperties from "./property-details-components/RelatedProperties";
import PropertyDisplay from "./property-details-components/PropertyDisplay";
import GetStarted from "../components/GetStarted";

// component to show details of a single property
const PropertyDetails = () => {
  // get propertyId from url params
  const { propertyId } = useParams();
  const location = useLocation(); // get current location
  const { allProperties } = useProperties(); // get all properties from context

  // state to store the current property
  const [property, setProperty] = useState(null);

  // find and set the property whenever propertyId or allProperties change
  useEffect(() => {
    const found = allProperties.find((p) => p.id.toString() === propertyId);
    setProperty(found);
  }, [propertyId, allProperties]);

  if (!property) {
    return <div className="text-center py-10">loading property...</div>;
  }

  return (
    <div key={location.pathname}>
      {/* hero section */}
      <section>
        <PropertyDisplay property={property} />
      </section>

      {/* related properties */}
      <section name="top" className="px-4 lg:px-0 mt-12 pb-12 lg:pb-20">
        <RelatedProperties prop={property} />
      </section>

      {/* get started section */}
      <section className="px-4 xl:px-0 mt-20 md:mt-40 lg:mt-24">
        <GetStarted />
      </section>
    </div>
  );
};

export default PropertyDetails;

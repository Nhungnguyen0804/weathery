import { TemperatureProvider } from "./TemperatureContext";
import { CountryProvider } from "./CountryContext";
export default function AppProviders({ children }) {
  return (
    <CountryProvider>
      <TemperatureProvider>{children}</TemperatureProvider>
    </CountryProvider>
  );
}

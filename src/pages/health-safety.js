import { Layout } from "../components/Layout/Layout";
import { HealthAndSafetyContent } from "../components/HealthSafetyContent/HealthSafetyContent";
import { HEALTH_SAFETY_DATA } from "../../data/HEALTH_SAFETY_DATA";

export default function HealthAndSafety() {
	return (
		<Layout title="Next Tourism - Post Covid-19 Health and Safety Guidelines">
			<HealthAndSafetyContent data={HEALTH_SAFETY_DATA} />
		</Layout>
	)
}
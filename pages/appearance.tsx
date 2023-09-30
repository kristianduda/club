import Container from "@/components/common/container";
import MainLayout from "@/components/common/main-layout";
import { AppearanceForm } from "@/components/forms/appearance-form";
import { Separator } from "@/components/ui/separator";

export default function SettingsAppearancePage() {
  return (
    <MainLayout>
      <Container>
        <div>
          <h3 className="text-lg font-medium">Appearance</h3>
          <p className="text-sm text-muted-foreground">
            Customize the appearance of the app. Automatically switch between
            day and night themes.
          </p>
        </div>
        <Separator />
        <AppearanceForm />
      </Container>
    </MainLayout>
  );
}

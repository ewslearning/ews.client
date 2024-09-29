import { Meta, StoryObj } from "@storybook/react";
import Footer from "@app/lib/components/footer/footer";

const FooterMeta: Meta<typeof Footer> = {
  component: Footer,
  title: "Components/Footer",
};

export default FooterMeta;

type Story = StoryObj<typeof FooterMeta>;

export const FooterStory: Story = {};

import Seo from "@/ui/components/seo/seo";
import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import { RiYoutubeFill, RiUser3Line } from "react-icons/ri";

const Home = () => {
  return (
    <div className="p-6">
      <Seo />
      <Typography className="mt-12 -mb-8" variant="h1" theme="primary">
        Typography
      </Typography>
      <hr className="border-secondary border-2 mb-32" />
      <div className="flex flex-col gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Display</Typography>
          <Typography variant="display">Nothing is impossible</Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">H 1</Typography>
          <Typography variant="h1">
            Nothing is impossible, the word itself says, I’m possible!
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">H 2</Typography>
          <Typography variant="h2">
            Nothing is impossible, the word itself says, I’m possible!
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">H 3</Typography>
          <Typography variant="h3">
            Nothing is impossible, the word itself says, I’m possible!
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">H 4</Typography>
          <Typography variant="h4">
            Nothing is impossible, the word itself says, I’m possible!
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">H 5</Typography>
          <Typography variant="h5">
            Nothing is impossible, the word itself says, I’m possible!
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Lead</Typography>
          <Typography variant="lead" weight="regular">
            Nothing is impossible, the word itself says, I’m possible!
          </Typography>
          <Typography variant="lead" weight="medium">
            Nothing is impossible, the word itself says, I’m possible!
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Body lg</Typography>
          <Typography variant="body-lg">
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.!
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Body base</Typography>
          <Typography variant="body-base">
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.!
          </Typography>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Body sm</Typography>
          <Typography variant="body-sm">
            When I was 5 years old, my mother always told me that happiness was
            the key to life. When I went to school, they asked me what I wanted
            to be when I grew up.!
          </Typography>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex flex-col gap-4">
            <Typography variant="caption4">Caption 1</Typography>
            <Typography variant="caption1" weight="regular">
              Regular
            </Typography>
            <Typography variant="caption1" weight="medium">
              Medium
            </Typography>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="caption4">Caption 2</Typography>
            <Typography variant="caption2" weight="regular">
              Regular
            </Typography>
            <Typography variant="caption2" weight="medium">
              Medium
            </Typography>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="caption4">Caption 3</Typography>
            <Typography variant="caption3" weight="regular">
              Regular
            </Typography>
            <Typography variant="caption3" weight="medium">
              Medium
            </Typography>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="caption4">Caption 4</Typography>
            <Typography variant="caption4" weight="regular">
              Regular
            </Typography>
            <Typography variant="caption4" weight="medium">
              Medium
            </Typography>
          </div>
        </div>
      </div>

      <Button variant="accent" size="small" isDisabled>
        Connexion
      </Button>
      <Button variant="icon" size="small" icon={{ icon: RiYoutubeFill }} />
      <Button
        variant="icon"
        size="small"
        icon={{ icon: RiYoutubeFill }}
        iconTheme="secondary"
      />
      <Button
        variant="icon"
        size="small"
        icon={{ icon: RiYoutubeFill }}
        iconTheme="gray"
      />
      <div className="flex items-center gap-4 p-10">
        <Button size="small" icon={{ icon: RiUser3Line }}>
          Connexion
        </Button>
        <Button
          size="small"
          icon={{ icon: RiUser3Line }}
          iconPosition="left"
          variant="outline"
        >
          Connexion
        </Button>
      </div>
    </div>
  );
};

export default Home;

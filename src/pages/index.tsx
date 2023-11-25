import Seo from "@/ui/components/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import Spinner from "@/ui/design-system/spinner/spinner";
import Typography from "@/ui/design-system/typography/typography";
import { RiBankCardFill, RiUser3Line } from "react-icons/ri";

const Home = () => {
  return (
    <div className="p-6">
      <Seo />
      <Typography className="mt-12 -mb-8" variant="h1" theme="primary">
        Typography
      </Typography>
      <hr className="border-secondary border-2 mb-32" />
      <div className="flex flex-col gap-12 mb-32">
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

      <Typography className="mt-12 -mb-8" variant="h1" theme="primary">
        Colors
      </Typography>
      <hr className="border-secondary border-2 mb-32" />
      <div className="grid grid-cols-3 mb-32">
        <div className="flex">
          <div className="w-14 h-10 bg-primary-200 rounded-l"></div>
          <div className="w-14 h-10 bg-primary-300"></div>
          <div className="w-14 h-10 bg-primary-400"></div>
          <div className="w-14 h-10 bg-primary flex justify-center items-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="w-14 h-10 bg-primary-600 rounded-r"></div>
        </div>
        <div className="flex">
          <div className="w-14 h-10 bg-secondary-200 rounded-l"></div>
          <div className="w-14 h-10 bg-secondary-300"></div>
          <div className="w-14 h-10 bg-secondary-400"></div>
          <div className="w-14 h-10 bg-secondary flex justify-center items-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <div className="w-14 h-10 bg-secondary-600 rounded-r"></div>
        </div>
        <div className="flex">
          <div className="w-14 h-10 bg-gray-400 rounded-l"></div>
          <div className="w-14 h-10 bg-gray-500"></div>
          <div className="w-14 h-10 bg-gray-600"></div>
          <div className="w-14 h-10 bg-gray-700"></div>
          <div className="w-14 h-10 bg-gray-800"></div>
          <div className="w-14 h-10 bg-gray rounded-r  flex justify-center items-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <Typography className="mt-12 -mb-8" variant="h1" theme="primary">
        Button
      </Typography>
      <hr className="border-secondary border-2 mb-32" />
      <div className="flex flex-col gap-12 mb-32">
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Small / 40px</Typography>
          <div className="flex gap-4">
            <Button size="small">Accent</Button>
            <Button size="small" variant="secondary">
              Secondary
            </Button>
            <Button size="small" variant="outline">
              Outline
            </Button>
            <Button size="small" variant="disabled">
              Disabled
            </Button>
            <Button
              size="small"
              variant="icon"
              icon={{ icon: RiBankCardFill }}
            ></Button>
            <Button variant="icon" size="small" isLoading />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Medium / 50px</Typography>
          <div className="flex gap-4">
            <Button>Accent</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="disabled">Disabled</Button>
            <Button variant="icon" icon={{ icon: RiBankCardFill }}></Button>
            <Button variant="icon" isLoading />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Large / 60px</Typography>
          <div className="flex gap-4">
            <Button size="large">Accent</Button>
            <Button size="large" variant="secondary">
              Secondary
            </Button>
            <Button size="large" variant="outline">
              Outline
            </Button>
            <Button size="large" variant="disabled">
              Disabled
            </Button>
            <Button
              size="large"
              variant="icon"
              icon={{ icon: RiBankCardFill }}
            ></Button>
            <Button variant="icon" size="large" isLoading />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Icon left/right</Typography>
          <div className="flex gap-4">
            <Button
              size="small"
              icon={{ icon: RiUser3Line }}
              iconPosition="left"
            >
              Left Icon
            </Button>
            <Button size="small" icon={{ icon: RiUser3Line }}>
              Right Icon
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Typography variant="caption4">Spinner</Typography>
          <div className="flex items-center gap-4">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

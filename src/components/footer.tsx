import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "About Me", "Blog"];
const href = ["/", "../about", "../blog"];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 
        md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
             &copy; {CURRENT_YEAR} Extended & maintained by Nasim Molana.
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link, index) => (
              <li key={link}>
                <Typography
                  as="a"
                  href={href[index]}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
            <Button color="gray" disabled className="opacity-50 cursor-not-allowed"> subscribe (Coming Soon) </Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { setServices } from "../Firebase/writeData";

const setData = async ({ urlSlug, heroHeading, heroContent,heroImage }) => {
  const setData = await setServices({
    urlSlug,
    heroContent,
    heroHeading,
    heroImage
  });
  return setData;
};

export default setData;

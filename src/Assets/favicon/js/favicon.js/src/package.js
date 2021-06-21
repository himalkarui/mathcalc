import Ico from "./ico";
import Png from "./png";

const Package = {};
Package.generate = canvas => {
  const ico = new Ico(canvas);
  const png = new Png(canvas);
  return {
    ico: ico.generate([16, 32, 48]),
    png16: png.generate(16),
    png24: png.generate(24),
    png48: png.generate(48),
    png32: png.generate(32),
    png180: png.generate(180),
    png192: png.generate(192),
    png512: png.generate(512)
  };
};

export default Package;

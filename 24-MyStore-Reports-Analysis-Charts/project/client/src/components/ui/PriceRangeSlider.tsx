import Slider from "rc-slider";

type SliderValue = number | number[];

const PriceRangeSlider = ({
  minValue,
  maxValue,
  value,
  handleChange,
  handleCommit,
}: {
  minValue: number;
  maxValue: number;
  value: [number, number];
  handleChange: (value: SliderValue) => void;
  handleCommit?: (value: SliderValue) => void;
}) => {
  return (
    <>
      <Slider
        range
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleChange}
        onChangeComplete={handleCommit}
      />
    </>
  );
};
export default PriceRangeSlider;

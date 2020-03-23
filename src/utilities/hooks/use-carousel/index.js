import { useState, useEffect, useReducer, useCallback } from 'react';

const transitionTime = 500;
const smooth = `transform ${transitionTime}ms ease`;

// Reducer =====================================================================
const initialPositionState = {
  next: 0,
  current: 0,
};

export const next = (length, current) => (current + 1) % length;
export const previous = (length, current) => (current - 1 + length) % length;

const carouselReducer = (state, action) => {
  switch (action.type) {
    case 'jump':
      return { ...state, next: action.next };
    case 'next':
      return { ...state, next: next(action.length, state.current) };
    case 'prev':
      return { ...state, next: previous(action.length, state.current) };
    case 'done':
      return { ...state, current: state.next };
    default:
      return state;
  }
};

export default function(length) {
  // State ===================================================================
  const [state, dispatch] = useReducer(carouselReducer, initialPositionState);

  // Positioning =============================================================
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [carouselItemWidth, setCarouselItemWidth] = useState(0);
  const carouselRef = useCallback((node) => {
    node && setCarouselWidth(node.getBoundingClientRect().width);
  }, []);
  const carouselItemRef = useCallback((node) => {
    node && setCarouselItemWidth(node.getBoundingClientRect().width);
  }, []);

  const isFixedSize = Boolean(carouselWidth) && Boolean(carouselItemWidth);
  const unit = isFixedSize ? 'px' : '%';
  const itemWidth = isFixedSize ? carouselItemWidth : 100;

  // Animation ===============================================================
  // (1) On idle we set the left offset and reset transform
  const style = {
    width: `${itemWidth * (length + 2)}${unit}`,
    left: `-${itemWidth * state.current}${unit}`,
    transform: 'translate3d(0, 0, 0)',
  };

  // (2) During animation we move the item using CSS’ translate3d
  if (state.next !== state.current) {
    const distance =
      (state.current > state.next ? 1 : -1) *
      Math.abs(state.current - state.next);

    const shift = (isFixedSize ? itemWidth : 100) * distance;

    style.transform = `translate3d(${shift}${unit}, 0, 0)`;
    style.transition = smooth;
  }

  // Transition ==============================================================
  useEffect(() => {
    const timer = setTimeout(
      () =>
        dispatch({
          type: 'done',
        }),
      transitionTime
    );
    return () => clearTimeout(timer);
  }, [state.next]);

  // useCarousel =============================================================
  return [
    state.current,
    (n) =>
      dispatch({
        type: 'jump',
        next: n,
      }),
    style,
    carouselRef,
    carouselItemRef,
  ];
}

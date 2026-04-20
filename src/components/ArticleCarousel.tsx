import { useState } from 'react';
import type { ArticleImageItem } from '../types/guide';

type Props = {
  images: ArticleImageItem[];
};

export function ArticleCarousel({ images }: Props): JSX.Element {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return <></>;
  }

  const count = images.length;
  const current = images[index];
  const currentSlide = index + 1;

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
  };

  return (
    <div className="article-carousel-shell">
      <figure className="article-carousel">
        <div className="carousel-frame">
          <img key={current.src} src={current.src} alt={current.alt} loading="lazy" />
          {count > 1 ? (
            <>
              <button className="carousel-btn prev" onClick={goPrev} aria-label="上一張">
                ‹
              </button>
              <button className="carousel-btn next" onClick={goNext} aria-label="下一張">
                ›
              </button>
            </>
          ) : null}
        </div>

        <figcaption>
          {current.caption ?? current.alt}
          {count > 1 ? <span className="carousel-count-inline">{`（${currentSlide}/${count}）`}</span> : null}
        </figcaption>

        {count > 1 ? (
          <div className="carousel-dots">
            {images.map((_, dotIndex) => (
              <button
                key={dotIndex}
                className={dotIndex === index ? 'active' : ''}
                onClick={() => setIndex(dotIndex)}
                aria-label={`切換到第 ${dotIndex + 1} 張`}
              />
            ))}
          </div>
        ) : null}
      </figure>
    </div>
  );
}

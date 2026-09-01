import { Home, Building2, Route, Landmark, Factory, Building } from 'lucide-react';
import residentialImg from '../assets/gallery/residential.jpg';
import commercialImg from '../assets/gallery/commercial.jpg';
import roadsImg from '../assets/gallery/roads.jpg';
import bridgesImg from '../assets/gallery/bridges.jpg';
import industrialImg from '../assets/gallery/industrial.jpg';
import highriseImg from '../assets/gallery/highrise.jpg';

const GALLERY = [
  { num: '01', icon: Home, title: 'Residential Construction', tag: 'Foundations & Walls', image: residentialImg, featured: true },
  { num: '02', icon: Building2, title: 'Commercial Projects', tag: 'Slabs & Columns', image: commercialImg },
  { num: '03', icon: Route, title: 'Roads & Pavements', tag: 'Driveways & Paths', image: roadsImg },
  { num: '04', icon: Landmark, title: 'Bridges & Infrastructure', tag: 'Heavy Load Structures', image: bridgesImg },
  { num: '05', icon: Factory, title: 'Industrial Flooring', tag: 'Warehouses & Plants', image: industrialImg },
  { num: '06', icon: Building, title: 'High-Rise Structures', tag: 'Beams & Cores', image: highriseImg },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header reveal">
        <div className="section-label">Our Gallery</div>
        <h2 className="display-heading">
          Where Strength<br />Takes Shape
        </h2>
        <div className="gold-line" />
      </div>

      <div className="gallery-grid reveal">
        {GALLERY.map(item => {
          const Icon = item.icon;
          return (
            <div
              className={`gallery-item${item.featured ? ' gallery-item-featured' : ''}`}
              key={item.num}
            >
              <img
                className="gallery-item-img"
                src={item.image}
                alt={`${item.title} using Stone Concrete high strength mix`}
                loading="lazy"
              />
              <div className="gallery-item-scrim" aria-hidden="true" />
              <span className="gallery-item-num">{item.num}</span>
              <div className="gallery-item-icon">
                <Icon size={item.featured ? 44 : 32} />
              </div>
              <div className="gallery-item-overlay">
                <span className="gallery-item-tag">{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

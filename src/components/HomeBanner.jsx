import { getBannerColorStyle,generateRandomColor } from '../utils/UtilFunctions';
import './component.scss'


export const HomeBanner = () => {
    const color = generateRandomColor();
    return (
    <div className="main-banner" style={getBannerColorStyle(color)}>
      <div className="banner">
        <img src={"https://images.unsplash.com/photo-1702089235697-e8ae4b8fdea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
        <div>
          <p>Playlist</p>
          <h1>Name</h1>
          <p>Some Random</p>
        </div>
      </div>
    </div>
    );
}


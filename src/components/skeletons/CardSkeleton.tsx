import ContentLoader from "react-content-loader"


export const CardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={360}
    height={412}
    viewBox="0 0 360 412"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={'box-shadow'}
  >
    <rect
      x="10"
      y="10"
      rx="7"
      ry="7"
      width="340"
      height="190"
    />
    <rect
      x="10"
      y="216"
      rx="7"
      ry="7"
      width="340"
      height="30"
    />
    <rect
      x="10"
      y="262"
      rx="7"
      ry="7"
      width="340"
      height="48"
    />
    <rect
      x="10"
      y="326"
      rx="7"
      ry="7"
      width="340"
      height="76"
    />
  </ContentLoader>
)

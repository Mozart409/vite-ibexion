export const Parallax: React.FC = () => {
  return (
    <div className="grid grid-flow-row justify-center w-full">
      <div className="container mx-auto border-b-8 border-canary-blue-500">
        <img src="/cover-image.png" alt="Ibexion GmbH" />
      </div>
      <div className="container">
        <img src="/big-ibex.svg" className="pt-6 mx-auto" height={768} />
      </div>
    </div>
  )
}

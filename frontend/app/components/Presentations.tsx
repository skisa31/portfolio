type Props = {
  title: string;
  date: string;
  confName: string;
  url: string;
}

const Presentations = ({
  title,
  date,
  confName,
  url,
}: Props) => {
  return (
    <div>
      <div className="text-xl">
        <p>"{title}"</p>
      </div>
      <div className="text-m text-right pt-2">
        <a href={url} target="_brank" rel="noopener noreferrer" className="text-left hover:underline hover:cursor-pointer">
          {confName}
        </a>
      </div>
      <div className="text-m text-right">
        <p>
          {date}
        </p>
      </div>
    </div>
  )
}

export default Presentations;
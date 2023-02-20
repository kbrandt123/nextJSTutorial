import Image from "next/image";
const EventsHome = (props) => {
  return (
    <>
      <h1>Events</h1>
      <div>
        {props.data.map((event) => {
          return (
            <a key={event.id} href={`/events/${event.id}`}>
              <Image
                width={200}
                height={"100"}
                alt={event.title}
                src={event.image}
              />
              <h2>{event.title}</h2>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default EventsHome;

export async function getStaticProps() {
  const data = await import("/data/data.json");

  return {
    props: {
      data: data.events_categories,
    },
  };
}

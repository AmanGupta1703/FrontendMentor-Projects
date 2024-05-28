function Notification({ notifications, onMarkAllAsRead }) {
  const numberOfPendingMessages = notifications.filter(
    (notification) => notification.status === "pending",
  ).length;

  return (
    <section className="bg-white px-4 py-5 md:mx-auto md:w-3/4 md:rounded-xl md:shadow-md lg:w-4/6 lg:px-7">
      {/* HEADER */}
      <article className="flex items-center justify-between">
        <h1 className="flex items-center gap-2">
          <span className="text-xl font-extrabold">Notification</span>
          <button className="block rounded-md bg-deep-blue px-3 py-1 font-extrabold text-white">
            {numberOfPendingMessages}
          </button>
        </h1>

        <p
          onClick={onMarkAllAsRead}
          className="cursor-pointer text-sm text-dark-gray-blue"
        >
          Mark all as read
        </p>
      </article>

      {/* Notification List (Messages) */}
      <article className="mt-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`mb-4 rounded-md px-2 py-2 ${notification.status === "pending" ? "cursor-pointer bg-light-sky-blue" : ""}`}
          >
            <div>
              <div className="flex items-center gap-3">
                <img
                  width={35}
                  height={35}
                  src={notification.avatar}
                  alt={notification.username}
                  className="self-start"
                />

                <div>
                  <p className="text-xs text-medium-gray-blue md:text-[14px]">
                    <span className="font-extrabold text-black md:text-base">
                      {notification.username}
                    </span>
                    <span> {notification.primary_action}</span>
                    {notification.sub_action ? (
                      <span
                        className={`font-bold ${notification.sub_action === "Chess Club" ? "text-deep-blue" : "text-dark-gray-blue"} lg:text-base`}
                      >
                        {" "}
                        {notification.sub_action}
                      </span>
                    ) : null}
                    {notification.status === "pending" ? (
                      <span className="ml-1 inline-block h-2 w-2 rounded-full bg-vivid-red"></span>
                    ) : null}
                  </p>

                  <div>
                    <span className="text-xs text-medium-gray-blue">
                      {notification.time}
                    </span>
                  </div>

                  {notification.messages.length > 0 ? (
                    <div className="mt-3 cursor-pointer rounded-md border border-medium-gray-blue p-3 md:hover:bg-light-sky-blue md:hover:text-white">
                      <p className="text-xs text-medium-gray-blue md:text-[14px]">
                        {notification.messages}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Notification;

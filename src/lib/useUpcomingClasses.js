import { useEffect, useMemo, useState } from "react";

const EVENTS_BASE_URL =
  "https://script.google.com/macros/s/AKfycbzXq9f6f1MCbmrZeocsYdWXHeKFx0BWpIaExA-rqAOGw4YuJAn7d9Ruaq48rokRreBV/exec";

function loadEventsJsonp() {
  return new Promise((resolve, reject) => {
    const callbackName = `betterBodiesEvents_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2)}`;

    const script = document.createElement("script");

    window[callbackName] = function (data) {
      resolve(data);
      delete window[callbackName];
      script.remove();
    };

    script.onerror = function () {
      reject(new Error("Could not load upcoming classes."));
      delete window[callbackName];
      script.remove();
    };

    script.src = `${EVENTS_BASE_URL}?action=events&callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

function parseDate(value) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
}

function sortEvents(events) {
  return [...events].sort((a, b) => {
    const aSort = Number(a.sortOrder || 9999);
    const bSort = Number(b.sortOrder || 9999);

    if (aSort !== bSort) {
      return aSort - bSort;
    }

    const aDate = parseDate(a.date);
    const bDate = parseDate(b.date);

    if (!aDate && !bDate) return 0;
    if (!aDate) return 1;
    if (!bDate) return -1;

    return aDate.getTime() - bDate.getTime();
  });
}

export function formatEventDate(value, options = {}) {
  if (!value) return "Date TBD";

  const date = parseDate(value);

  if (!date) return value;

  return date.toLocaleDateString(undefined, {
    weekday: options.weekday || "short",
    month: options.month || "short",
    day: options.day || "numeric",
    year: options.year,
  });
}

export function buildEventTimeRange(event) {
  if (event?.startTime && event?.endTime) {
    return `${event.startTime} – ${event.endTime}`;
  }

  if (event?.startTime) {
    return event.startTime;
  }

  return "Time TBD";
}

export function buildSelectedClassLabel(event) {
  if (!event) return "";

  return [
    event.title,
    event.date
      ? formatEventDate(event.date, {
          weekday: "long",
          year: "numeric",
        })
      : "",
    event.startTime,
    event.locationLabel,
  ]
    .filter(Boolean)
    .join(" — ");
}

export function scrollToContactWithClass(event) {
  window.dispatchEvent(
    new CustomEvent("betterbodies:selected-class", {
      detail: {
        selectedClass: buildSelectedClassLabel(event),
        classType: event?.classType || "",
      },
    })
  );

  document
    .querySelector("#contact")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function scrollToSection(selector) {
  document
    .querySelector(selector)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function useUpcomingClasses() {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    setStatus("loading");
    setError("");

    loadEventsJsonp()
      .then((data) => {
        if (cancelled) return;

        if (data?.ok) {
          const safeEvents = Array.isArray(data.events) ? data.events : [];
          setEvents(sortEvents(safeEvents));
          setStatus("ready");
        } else {
          setEvents([]);
          setStatus("error");
          setError("Upcoming classes response was not valid.");
        }
      })
      .catch((err) => {
        if (cancelled) return;

        setEvents([]);
        setStatus("error");
        setError(err.message || "Could not load upcoming classes.");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const nextClass = useMemo(() => {
    return events.length > 0 ? events[0] : null;
  }, [events]);

  return {
    events: Array.isArray(events) ? events : [],
    nextClass,
    status,
    error,
    isLoading: status === "loading",
    isReady: status === "ready",
    isError: status === "error",
  };
}

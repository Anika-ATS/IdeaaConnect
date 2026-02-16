import { useEffect, useState } from "react";

const NoticePage = () => {
  const [notices, setNotices] = useState([]);

  // Mock fetch from backend
  useEffect(() => {
    // Normally, you'd fetch from backend API like:
    // axios.get("/api/notices").then(res => setNotices(res.data));
    
    const mockNotices = [
      {
        id: 1,
        title: "Project Submission Deadline",
        content:
          "All students must submit their projects by 16th February 2026. Late submissions will not be accepted.",
        date: "2026-02-10",
      },
      {
        id: 2,
        title: "New Supervisor Assigned",
        content:
          "Supervisor assignments for final year projects have been updated. Check your dashboard for your assigned supervisor.",
        date: "2026-01-12",
      },
      
    ];

    setNotices(mockNotices);
  }, []);

  return (
    <section className="min-h-screen py-16 bg-base-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Notices</h1>
          <p className="mt-2 text-gray-500">
            All notices from admin will appear here
          </p>
        </div>

        {/* Notice List */}
        <div className="space-y-6">
          {notices.length === 0 ? (
            <p className="text-center text-gray-500">
              No notices available at the moment.
            </p>
          ) : (
            notices.map((notice) => (
              <div
                key={notice.id}
                className="card bg-base-200 shadow hover:shadow-lg transition duration-300"
              >
                <div className="card-body">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="card-title text-lg md:text-xl">
                      {notice.title}
                    </h2>
                    <span className="text-sm text-gray-400">
                      {notice.date}
                    </span>
                  </div>
                  <p className="text-gray-600">{notice.content}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default NoticePage;

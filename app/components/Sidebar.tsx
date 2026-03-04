"use client";

import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("sidebar-collapsed");
      if (v !== null) setCollapsed(v === "true");
    } catch (e) {
      // ignore (SSR safety)
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sidebar-collapsed", String(collapsed));
    } catch (e) {
      // ignore
    }
  }, [collapsed]);

  return (
    <aside className={`${collapsed ? "w-20" : "w-72"} min-h-screen bg-neutral-900 text-neutral-100 p-4 transition-all duration-200`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="font-semibold truncate">{!collapsed && "Anmol's Notion"}</div>
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed((s) => !s)}
          className={`${collapsed ? "hidden" : "text-sm opacity-80 p-1 rounded hover:bg-neutral-800"}`}
        >
          <span className={`inline-block transform transition-transform ${!collapsed ? "rotate-180" : ""}`}>❯</span>
        </button>
      </div>

      <nav className="space-y-1 text-sm">
        {/* icon-only toggle visible only when collapsed to align with icons */}
        <div className={`flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer ${collapsed ? "" : "hidden"}`}>
          <span className="w-6 text-center">
            <button
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              onClick={() => setCollapsed((s) => !s)}
              className="inline-block p-0.5 rounded hover:bg-neutral-800"
            >
              <span className={`inline-block transform transition-transform ${!collapsed ? "rotate-180" : ""}`}>❯</span>
            </button>
          </span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">🔍</span>
          {!collapsed && <span>Search</span>}
        </div>
        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">🏠</span>
          {!collapsed && <span>Home</span>}
        </div>
        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">🗓️</span>
          {!collapsed && <span>Meetings</span>}
        </div>
        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">🤖</span>
          {!collapsed && <span>Notion AI</span>}
        </div>
        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">📥</span>
          {!collapsed && <span>Inbox</span>}
        </div>
        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">📚</span>
          {!collapsed && <span>Library</span>}
        </div>
      </nav>

      {!collapsed && <div className="mt-6 pt-4 border-t border-neutral-800 text-xs opacity-80">Recents</div>}

      <div className={`mt-2 text-sm space-y-1 ${collapsed ? "items-center" : ""}`}>
        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">🧠</span>
          {!collapsed && (
            <>
              <span>Agents</span>
              <span className="ml-auto text-[10px] bg-neutral-700 px-2 py-0.5 rounded">Beta</span>
            </>
          )}
        </div>
        {!collapsed && <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer text-neutral-400">+ New agent</div>}
      </div>

      {!collapsed && <div className="mt-6 pt-4 border-t border-neutral-800 text-xs opacity-80">Private</div>}

      <div className="mt-2 text-sm space-y-1">
        <div className="flex items-center gap-3 p-2 rounded bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">💀</span>
          {!collapsed && <span>THE WATCH/READ LIST</span>}
        </div>
        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">🛡️</span>
          {!collapsed && <span>THE HALL OF FAME</span>}
        </div>
        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">🎮</span>
          {!collapsed && <span>VIDEO GAMES</span>}
        </div>
        <div className="flex items-center gap-3 p-2 rounded hover:bg-neutral-800 cursor-pointer">
          <span className="w-6 text-center">🎬</span>
          {!collapsed && <span>CINEMA</span>}
        </div>
      </div>
    </aside>
  );
}

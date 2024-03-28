import { Canvas } from "../index";
import { Edge, Node, CanvasContent } from "../types";

function App() {
  const mockEdges: Edge[] = [
    {
      id: "edge1",
      fromNode: "node1",
      fromSide: "right",
      fromEnd: "bottom",
      toNode: "node2",
      toSide: "left",
      toEnd: "top",
    },
    {
      id: "edge2",
      fromNode: "node2",
      fromSide: "bottom",
      fromEnd: "right",
      toNode: "node3",
      toSide: "top",
      toEnd: "left",
    },
    {
      id: "edge3",
      fromNode: "node3",
      fromSide: "right",
      fromEnd: "top",
      toNode: "node4",
      toSide: "top",
      toEnd: "bottom",
    },
    {
      id: "edge4",
      fromNode: "node1",
      fromSide: "right",
      fromEnd: "bottom",
      toNode: "node4",
      toSide: "left",
      toEnd: "bottom",
    },
    {
      id: "edge5",
      fromNode: "node4",
      fromSide: "right",
      fromEnd: "bottom",
      toNode: "node5",
      toSide: "left",
      toEnd: "top",
    },
    {
      id: "edge6",
      fromNode: "node6",
      fromSide: "right",
      fromEnd: "bottom",
      toNode: "node7",
      toSide: "left",
      toEnd: "top",
    },
  ];

  const mockInitialNodes: Node[] = [
    {
      id: "node1",
      type: "start",
      data: { label: "Start Node", content: "This is the starting point" },
      position: { x: 100, y: 100 },
      dimensions: { width: 120, height: 60 },
    },
    {
      id: "node2",
      type: "process",
      data: { label: "Process Node", content: "This is a process node" },
      position: { x: 300, y: 100 },
      dimensions: { width: 150, height: 80 },
    },
    {
      id: "node3",
      type: "decision",
      data: { label: "Decision Node", content: "This is a decision node" },
      position: { x: 100, y: 300 },
      dimensions: { width: 140, height: 100 },
    },
    {
      id: "node4",
      type: "end",
      data: { label: "End Node", content: "This is the end point" },
      position: { x: 300, y: 500 },
      dimensions: { width: 120, height: 60 },
    },
    {
      id: "node5",
      type: "process",
      data: { label: "Process Node", content: "Another process node" },
      position: { x: 500, y: 100 },
      dimensions: { width: 150, height: 80 },
    },
    {
      id: "node6",
      type: "decision",
      data: { label: "Decision Node", content: "Another decision node" },
      position: { x: 100, y: 480 },
      dimensions: { width: 140, height: 100 },
    },
    {
      id: "node7",
      type: "process",
      data: { label: "Process Node", content: "Yet another process node" },
      position: { x: 500, y: 300 },
      dimensions: { width: 150, height: 80 },
    },
  ];

  const mockCanvasContent: CanvasContent = {
    edges: mockEdges,
    initialNodes: mockInitialNodes,
  };

  return <Canvas content={mockCanvasContent} />;
}

export default App;

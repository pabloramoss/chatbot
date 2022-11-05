import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { addEdge, applyEdgeChanges, applyNodeChanges, Connection, Edge, EdgeChange, Node, NodeChange, updateEdge } from "reactflow";
import { initialEdges, initialNodes } from "../../constants/initialNodes";


interface FlowChartState {
  nodes: Node[];
  edges: Edge[];
  selection: {
    nodes: Node[];
    edges: Edge[];
  };
}

const initialState: FlowChartState = {
  nodes: initialNodes,
  edges: initialEdges,
  selection: {
    nodes: [],
    edges: [],
  }
};

const flowChartSlice = createSlice({
  name: "flowchart",
  initialState,
  reducers: {
    nodeAdd: (state, action: PayloadAction<Node>) => {
      state.nodes.push(action.payload)
    },
    updateNodes: (state, action: PayloadAction<any>)=> {
      state.nodes = action.payload
    },
    updateEdges: (state, action: PayloadAction<any>) => {
      state.edges = action.payload
    },
    // onNodesChange
    nodesChange: (state, action: PayloadAction<NodeChange[]>) => {
      const newNodeArray = applyNodeChanges(action.payload, state.nodes);
    
      state.nodes = newNodeArray;
    },
    // onEdgesChange
    edgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
      const newEdgeArray = applyEdgeChanges(action.payload, state.edges);
    
      state.edges = newEdgeArray;
    },
    // onConnect
    connectChange: (state, action: PayloadAction<Connection>) => {
      const newEdgeArray = addEdge(action.payload, state.edges);
    
      state.edges = newEdgeArray;
    },
    updateSingleEdge: (state, action: PayloadAction<any>) => {
      const {oldEdge, newConnection} = action.payload
      const newEdgesArray = updateEdge(oldEdge, newConnection, state.edges)

      state.edges = newEdgesArray

    },
    removeEdge: (state, action: PayloadAction<any>) => {
      const edge = action.payload
      const newEdgesArray = state.edges.filter((e) => e.id !== edge.id)

      state.edges = newEdgesArray
    },
  }
});

export const {nodeAdd, updateNodes, updateEdges, nodesChange, edgesChange, connectChange, updateSingleEdge, removeEdge

} = flowChartSlice.actions;

export default flowChartSlice.reducer;
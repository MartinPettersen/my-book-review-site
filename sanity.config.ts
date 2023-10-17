import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({ 
    projectId: 'y6bml8rc',
    dataset: 'production',
    title: "A Book Review Website",
    apiVersion: "2023-10-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
 });

export default config;






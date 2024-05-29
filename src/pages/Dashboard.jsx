import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

const Dashboard = () => {
    const [posts, setPosts] = useState([]);


    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <DataTable value={posts} paginator rows={10}>
                <Column field="title" header="Title" sortable />
                <Column field="author" header="Author" sortable />
                <Column field="createdAt" header="Date Created" sortable />
                <Column
                    header="Actions"
                    body={(rowData) => (
                        <>
                            <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning" />
                            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" />
                        </>
                    )}
                />
            </DataTable>
            <Button label="Create New Post" icon="pi pi-plus" className="p-button-success" />
        </div>
    );
};

export default Dashboard;

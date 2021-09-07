import React, {useEffect, useState} from "react";
import MaterialTable from "material-table";
import {CircularProgress} from "@material-ui/core";
import {axiosInstance, BACKEND_API} from "../../../axios/AxiosInstance";
import {MaterialTableIcons} from "../../../layouts/MaterialTableIcons";
import moment from 'moment';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {AddPeopleDialog} from "./components/AddPeopleDialog";
import {useSnackbar} from "notistack";
import {EditPeopleDialog} from "./components/EditPeopleDialog";


export const People = () => {

    const { enqueueSnackbar } = useSnackbar();
    const [tableData, setTableData] = useState([]);
    const [isTableDataLoading, setIsTableDataLoading] = useState(false);

    const initialState = {
        regId: "",
        firstName: "",
        lastName: "",
        nic: "",
        dob: "",
        address: "",
        phone: "",
        homeNo: "",
        status: "",
        incomeStatus: ""
    }
    const [newDetails, setNewDetails] = useState(initialState)
    const [isAddViewOpen, setIsAddViewOpen] = useState(false);
    const [saveIsLoading, setSaveIsLoading] = useState(false)

    const [updateDetails, setUpdateDetails] = useState(initialState)
    const [isUpdateViewOpen, setIsUpdateViewOpen] = useState(false);
    const [updateIsLoading, setUpdateIsLoading] = useState(false)

    const [deleteIsLoading, setDeleteIsLoading] = useState(false)

    useEffect(() => {

        const fetchTableData = async () => {
            setIsTableDataLoading(true);
            await axiosInstance({
                method: "GET",
                url: BACKEND_API.GET_PEOPLE
            }).then(res => {
                setTableData(res.data)
            }).finally(() => {
                setIsTableDataLoading(false);
            })
        }

        fetchTableData();
    }, [])

    const handleDelete = async (regId) => {
        setDeleteIsLoading(true);
        await axiosInstance({
            method: "DELETE",
            url: BACKEND_API.GET_PEOPLE,
            data: {regId}
        }).then(() => {
            enqueueSnackbar("Deleted Person", {
                variant: 'success'
            });
            setTableData(tableData.filter((item) => item.RegID !== regId));
        }).catch((error) => {
            if (error.response) {
                enqueueSnackbar(error.response.data.message, {
                    variant: 'error'
                });
            } else {
                enqueueSnackbar("Something went wrong", {
                    variant: 'error'
                });
            }
        }).finally(() => {
            setDeleteIsLoading(false);
        })
    }

    const handleChange = (event) => {
        setNewDetails({
            ...newDetails,
            [event.target.name]: event.target.value
        })
    }

    const handleUpdateChange = (event) => {
        setUpdateDetails({
            ...updateDetails,
            [event.target.name]: event.target.value
        })
    }

    const handleOpenUpdateDialog = () => {
        setIsUpdateViewOpen(true);
    }

    const handleCloseUpdateDialog = () => {
        setIsUpdateViewOpen(false);
    }

    const handleUpdate = async () => {
        if (
            updateDetails.regId === "" ||
            updateDetails.firstName === "" ||
            updateDetails.lastName === "" ||
            updateDetails.dob === "" ||
            updateDetails.address === "" ||
            updateDetails.phone === "" ||
            updateDetails.homeNo === "" ||
            updateDetails.incomeStatus === "" ||
            updateDetails.status === ""
        ) {
            enqueueSnackbar("Please fill in all fields", {
                variant: 'warning'
            });
            return;
        }

        setUpdateIsLoading(true)
        await axiosInstance({
            method: "PUT",
            url: BACKEND_API.ADD_PEOPLE,
            data: updateDetails
        }).then(() => {
            enqueueSnackbar("Updated Person", {
                variant: 'success'
            });
            setTableData(tableData.filter((item) => item.RegID !== updateDetails.regId));
            setTableData([...tableData, updateDetails])
            setUpdateDetails(initialState);
            setIsUpdateViewOpen(false);
        }).catch((error) => {
            if (error.response) {
                enqueueSnackbar(error.response.data.message, {
                    variant: 'error'
                });
            } else {
                enqueueSnackbar("Something went wrong", {
                    variant: 'error'
                });
            }
        }).finally(() => {
            setUpdateIsLoading(false);
        })
    }

    const handleOpenDialog = () => {
        setIsAddViewOpen(true);
    }

    const handleCloseDialog = () => {
        setIsAddViewOpen(false);
    }

    const handleSave = async () => {
        if (
            newDetails.regId === "" ||
            newDetails.firstName === "" ||
            newDetails.lastName === "" ||
            newDetails.dob === "" ||
            newDetails.address === "" ||
            newDetails.phone === "" ||
            newDetails.homeNo === "" ||
            newDetails.incomeStatus === "" ||
            newDetails.status === ""
        ) {
            enqueueSnackbar("Please fill in all fields", {
                variant: 'warning'
            });
            return;
        }

        setSaveIsLoading(true)
        await axiosInstance({
            method: "POST",
            url: BACKEND_API.ADD_PEOPLE,
            data: newDetails
        }).then(() => {
            enqueueSnackbar("Added Person", {
                variant: 'success'
            });
            setTableData([...tableData, newDetails])
            setNewDetails(initialState);
            setIsAddViewOpen(false);
            window.reload()
        }).catch((error) => {
            if (error.response) {
                enqueueSnackbar(error.response.data.message, {
                    variant: 'error'
                });
            } else {
                enqueueSnackbar("Something went wrong", {
                    variant: 'error'
                });
            }
        }).finally(() => {
            setSaveIsLoading(false);
        })
    }

    return(
        <>
            <AddPeopleDialog
                addViewOpen={isAddViewOpen}
                handleChange={handleChange}
                handleCloseDialog={handleCloseDialog}
                saveIsLoading={saveIsLoading}
                handleSave={handleSave}
            />
            <EditPeopleDialog
                updateViewOpen={isUpdateViewOpen}
                handleChange={handleUpdateChange}
                handleCloseDialog={handleCloseUpdateDialog}
                updateIsLoading={updateIsLoading}
                handleUpdate={handleUpdate}
                updateDetails={updateDetails}
            />
            <div style={{textAlign: "right", marginBottom: "10px"}}>
                <Button
                    variant="contained"
                    color="white"
                    startIcon={<AddIcon />}
                    onClick={handleOpenDialog}
                >
                    Add People
                </Button>
            </div>
            <MaterialTable
                icons={MaterialTableIcons}
                title="People"
                columns={[
                    {
                        title: 'Reg ID',
                        field: 'RegID',
                        grouping: false,
                    },
                    {
                        title: 'First Name',
                        field: 'fname',
                        grouping: false,
                    },
                    {
                        title: 'Last Name',
                        field: 'lname',
                        grouping: false,
                    },
                    {
                        title: 'NIC No.',
                        field: 'NIC',
                        grouping: false,
                    },
                    {
                        title: 'Date of Birth',
                        field: 'DOB',
                        grouping: false,
                        render: (rowData) => moment(new Date(rowData.DOB)).format('YYYY-MM-DD')
                    },
                    {
                        title: 'Address',
                        field: 'address',
                        grouping: false,
                    },
                    {
                        title: 'Home Number',
                        field: 'home_no',
                        grouping: false,
                    },
                    {
                        title: 'Mobile Number',
                        field: 'phone',
                        grouping: false,
                    },
                    {
                        title: 'Status',
                        field: 'status',
                        grouping: false,
                    },
                    {
                        title: 'Income Status',
                        field: 'income_status',
                        grouping: false,
                    },
                ]}
                actions={[
                    () => ({
                        icon: () =>
                            deleteIsLoading ? (
                                <CircularProgress size={17.5} />
                            ) : (
                                <EditIcon />
                            ),
                        tooltip: 'Update',
                        onClick: (_, rowData) => {
                            setUpdateDetails({
                                ...updateDetails,
                                regId: rowData.RegID,
                                firstName: rowData.fname,
                                lastName: rowData.lname,
                                nic: rowData.NIC,
                                dob: rowData.DOB,
                                address: rowData.address,
                                phone: rowData.phone,
                                homeNo: rowData.home_no,
                                status: rowData.status,
                                incomeStatus: rowData.income_status
                            })
                            handleOpenUpdateDialog()
                        }
                    }),
                    () => ({
                        icon: () =>
                            deleteIsLoading ? (
                                <CircularProgress size={17.5} />
                            ) : (
                                <DeleteForeverIcon />
                            ),
                        tooltip: 'Delete Person',
                        onClick: (_, rowData) => handleDelete(rowData.RegID)
                    }),
                ]}
                localization={{
                    header: {
                        actions: ''
                    }
                }}
                data={tableData}
                isLoading={isTableDataLoading}
                options={{
                    actionsColumnIndex: -1,
                    doubleHorizontalScroll: true,
                    exportButton: { csv: true },
                    exportAllData: true,
                    pageSize: 10,
                    grouping: false,
                    filtering: true,
                    maxBodyHeight: window.innerHeight * 0.7
                }}
            />
        </>
    )
}

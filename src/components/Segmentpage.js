import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const initialSchemaOptions = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
];

const Segmentpage = () => {
    const [segmentName, setSegmentName] = useState("");
    const [schema, setSchema] = useState([]);
    const [schemaOptions, setSchemaOptions] = useState(initialSchemaOptions);
    const [newSchemaOption, setNewSchemaOption] = useState("");

    const handleSaveSegment = () => {
        // Send data to server
        fetch("https://webhook.site/21ea7e89-3370-472f-95d3-95c1d7bf915d", {
            method: "POST",
            body: JSON.stringify({ segment_name: segmentName, schema }),
        }).then((response) => console.log(response));

    };

    const handleAddNewSchema = () => {
        if (newSchemaOption !== "") {
            setSchema([...schema, { [newSchemaOption]: newSchemaOption }]);
            setNewSchemaOption("");
            setSchemaOptions(schemaOptions.filter((option) => option.value !== newSchemaOption));
        }
    };

    return (
        <div>

            {
                <div>
                    <div className='header'>
                        <div className='icon'><a href="/"><ArrowBackIosIcon /></a></div>
                        <div className='title1'>View Audience</div>
                    </div>
                    <div className="section1">
                        <div className="input1">
                            <div className="title1">Enter the Name of the Segment </div>
                            <input type="text" value={segmentName} onChange={(e) => setSegmentName(e.target.value)} placeholder="Name of the Segment" />
                        </div>
                        <div className="title2">To save your segment you need to add the schemas to build the query</div>
                        <select
                            value={newSchemaOption}
                            onChange={(e) => setNewSchemaOption(e.target.value)}
                        >
                            <option value="">-- Add schema to segment --</option>
                            {schemaOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <button onClick={handleAddNewSchema} className="btn1">+Add new schema</button>
                        <div>
                            {schema.map((field, index) => (
                                <select
                                    key={index}
                                    value={Object.keys(field)[0]}
                                    onChange={(e) => {
                                        const newSchema = [...schema];
                                        newSchema[index] = { [e.target.value]: e.target.value };
                                        setSchema(newSchema);
                                    }}
                                >
                                    <option value="">-- Select a field --</option>
                                    {schemaOptions.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                            disabled={schema.some((field) => Object.keys(field)[0] === option.value)}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            ))}
                        </div>
                        <button onClick={handleSaveSegment} className="btn2">Save the segment</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default Segmentpage;

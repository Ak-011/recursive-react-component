import Add from '@public/svg/add.svg';
import { useState } from 'react';

import styles from './styles.module.scss';

type FileAndFolderType = {
    parentData: any;
};

const FileAndFolder = (props: FileAndFolderType) => {
    const { parentData } = props;
    const [count, setCount] = useState(1);
    const [name, setName] = useState<string>();
    const [id, setId] = useState<string>('');
    const [display, setDisplay] = useState<boolean>(false);
    const [folderOrFile, setFolderOrFile] = useState<boolean>(false);

    const handleFolderChange = (item: any, event: any) => {
        event.stopPropagation();
        setId(item.id);
        setDisplay(true);
        setFolderOrFile(true);
        setCount(count + 1);
    };

    const handleFileChange = (item: any, event: any) => {
        event.stopPropagation();
        setId(item.id);
        setDisplay(true);
        setFolderOrFile(false);
        setCount((prevCount) => prevCount + 1);
    };

    const handleInputChange = (event: any) => {
        setName(event.target.value);
    };

    const pushItemsOnEnter = (item: any, value: any) => {
        if (item.folderOrNot) {
            item.item?.push(value);
        }
        setDisplay(false);
    };

    const pushItems = (item: any) => {
        const resultantData = {
            id: count.toString(),
            name,
            folderOrNot: folderOrFile,
            item: folderOrFile && [],
        };

        pushItemsOnEnter(item, resultantData);
    };

    const handleOnKeyPressInput = (item: any, event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.target.blur();
            pushItems(item);
        }
    };

    return (
        <div className={styles['wrapper-container']}>
            {parentData?.map((item: any) => (
                <div key={item.id}>
                    <div className={styles['file-container']}>
                        <h4>{item.name}</h4>
                        {item.folderOrNot && (
                            <div className={styles['file-folder']}>
                                <span
                                    className={styles['folder-icon']}
                                    onClick={(e) => handleFolderChange(item, e)}
                                    aria-hidden
                                >
                                    Folder <Add width={15} height={15} />
                                </span>
                                <span
                                    className={styles['file-icon']}
                                    onClick={(e) => handleFileChange(item, e)}
                                    aria-hidden
                                >
                                    File
                                </span>
                            </div>
                        )}
                    </div>
                    {display && item.id === id && (
                        <input
                            placeholder="Enter the Name"
                            onChange={handleInputChange}
                            onKeyPress={(e) => handleOnKeyPressInput(item, e)}
                            className={styles['wrapper-input']}
                        />
                    )}
                    {item.folderOrNot && <FileAndFolder parentData={item.item} />}
                </div>
            ))}
            <div />
        </div>
    );
};

export default FileAndFolder;

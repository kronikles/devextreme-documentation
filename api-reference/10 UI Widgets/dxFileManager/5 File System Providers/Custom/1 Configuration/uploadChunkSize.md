---
id: CustomFileSystemProvider.Options.uploadChunkSize
type: Number
---
---
##### shortDescription
Specifies a chunk size in bytes.

---
The **FileManager** can upload large files in parts. The widget divides a file into parts and sends them in separate requests. Set the **uploadChunkSize** option to a positive value to enable this functionality. 

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                uploadChunkSize: 1000 
            }) 
        });
    });

---
